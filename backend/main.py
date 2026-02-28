from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import List, Dict, Any
from collections import defaultdict, deque

app = FastAPI()

# Enable CORS for frontend communication
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class Node(BaseModel):
    id: str
    
class Edge(BaseModel):
    source: str
    target: str
    
class Pipeline(BaseModel):
    nodes: List[Dict[str, Any]]
    edges: List[Dict[str, Any]]

def is_dag(nodes: List[Dict[str, Any]], edges: List[Dict[str, Any]]) -> bool:
    """
    Check if the graph formed by nodes and edges is a Directed Acyclic Graph (DAG).
    Uses topological sorting with Kahn's algorithm.
    Returns True if it's a DAG (no cycles), False otherwise.
    """
    # Build adjacency list and calculate in-degrees
    graph = defaultdict(list)
    in_degree = defaultdict(int)
    
    # Initialize all nodes with in-degree 0
    node_ids = {node['id'] for node in nodes}
    for node_id in node_ids:
        in_degree[node_id] = 0
    
    # Build the graph
    for edge in edges:
        source = edge['source']
        target = edge['target']
        graph[source].append(target)
        in_degree[target] += 1
    
    # Find all nodes with in-degree 0
    queue = deque([node_id for node_id in node_ids if in_degree[node_id] == 0])
    
    processed_count = 0
    
    # Process nodes with in-degree 0
    while queue:
        node = queue.popleft()
        processed_count += 1
        
        # Reduce in-degree for neighbors
        for neighbor in graph[node]:
            in_degree[neighbor] -= 1
            if in_degree[neighbor] == 0:
                queue.append(neighbor)
    
    # If we processed all nodes, it's a DAG
    # If we couldn't process all nodes, there's a cycle
    return processed_count == len(node_ids)

@app.get('/')
def read_root():
    return {'Ping': 'Pong'}

@app.post('/pipelines/parse')
def parse_pipeline(pipeline: Pipeline):
    """
    Parse the pipeline and return:
    - num_nodes: number of nodes in the pipeline
    - num_edges: number of edges in the pipeline
    - is_dag: whether the pipeline forms a Directed Acyclic Graph
    """
    num_nodes = len(pipeline.nodes)
    num_edges = len(pipeline.edges)
    is_dag_result = is_dag(pipeline.nodes, pipeline.edges)
    
    return {
        'num_nodes': num_nodes,
        'num_edges': num_edges,
        'is_dag': is_dag_result
    }
