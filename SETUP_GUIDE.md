# VectorShift Technical Assessment - Setup & Running Guide

## 🚀 Quick Start

### Prerequisites
- Node.js (v14 or higher)
- Python 3.8+
- npm or yarn

---

## 📦 Installation & Setup

### 1. Frontend Setup

```bash
# Navigate to frontend directory
cd frontend

# Install dependencies
npm install

# Start the development server
npm start
```

The frontend will automatically open at **http://localhost:3000**

**Note**: If zustand is not installed automatically, run:
```bash
npm install zustand
```

---

### 2. Backend Setup

```bash
# Navigate to backend directory (in a new terminal)
cd backend

# Install Python dependencies
pip install fastapi uvicorn pydantic

# Alternative: using requirements.txt (if created)
# pip install -r requirements.txt

# Start the backend server
uvicorn main:app --reload
```

The backend API will run at **http://localhost:8000**

You can verify it's running by visiting: http://localhost:8000 (should show `{"Ping": "Pong"}`)

---

## 🎯 Using the Application

### Step 1: Create Your Pipeline

1. **Drag nodes** from the toolbar onto the canvas
   - Available nodes: Input, Output, LLM, Text, Filter, Transform, Database, API, Condition

2. **Connect nodes** by dragging from a source handle (●) to a target handle (●)
   - Source handles are on the right side of nodes
   - Target handles are on the left side of nodes

3. **Configure nodes** by filling in their input fields
   - Input/Output nodes: Set name and type
   - Text nodes: Enter text with variables like `{{variableName}}`
   - Other nodes: Configure their specific settings

### Step 2: Test Text Node Variables

1. Create a **Text node**
2. Type something like: `"Hello {{name}}, you scored {{points}} points!"`
3. Watch as new input handles appear on the left for each variable
4. The node will auto-resize based on content

### Step 3: Submit & Validate

1. Click the blue **"Submit Pipeline"** button at the bottom
2. The system will analyze your pipeline and show:
   - Number of nodes
   - Number of edges
   - Whether it's a valid DAG (Directed Acyclic Graph)

**Valid Pipeline** (No cycles):
```
✅ Your pipeline is valid and has no cycles!
```

**Invalid Pipeline** (Has cycles):
```
⚠️ Warning: Your pipeline contains cycles and may cause infinite loops.
```

---

## 🎨 Features to Explore

### Part 1: Node Abstraction
- Create nodes quickly by dragging from the toolbar
- All 9 node types use the same base component
- Consistent styling and behavior

### Part 2: Styling
- Dark theme for comfortable viewing
- Color-coded nodes by type
- Hover effects on draggable items and buttons
- Smooth animations and transitions

### Part 3: Text Node Logic
- Dynamic resizing based on content length
- Variable detection with `{{variableName}}` syntax
- Automatic creation of input handles for variables

### Part 4: Backend Integration
- Real-time pipeline validation
- DAG cycle detection
- User-friendly result display

---

## 🛠️ Troubleshooting

### Frontend Issues

**Port 3000 already in use:**
```bash
# Kill the process using port 3000
# On Windows:
netstat -ano | findstr :3000
taskkill /PID <PID> /F

# On Mac/Linux:
lsof -ti:3000 | xargs kill
```

**Module not found errors:**
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
```

### Backend Issues

**Port 8000 already in use:**
```bash
# Run on a different port
uvicorn main:app --reload --port 8001

# Then update frontend submit.js:
# Change 'http://localhost:8000' to 'http://localhost:8001'
```

**CORS errors:**
- Make sure backend is running
- Check that CORS middleware is properly configured in main.py
- Verify frontend is accessing http://localhost:8000

**Module not found (FastAPI/Pydantic):**
```bash
pip install --upgrade fastapi uvicorn pydantic
```

---

## 📁 File Structure Reference

```
frontend_technical_assessment/
├── frontend/
│   ├── src/
│   │   ├── nodes/
│   │   │   ├── BaseNode.js         ← Core abstraction
│   │   │   ├── inputNode.js
│   │   │   ├── outputNode.js
│   │   │   ├── llmNode.js
│   │   │   ├── textNode.js         ← Variables & resizing
│   │   │   ├── filterNode.js       ← NEW
│   │   │   ├── transformNode.js    ← NEW
│   │   │   ├── databaseNode.js     ← NEW
│   │   │   ├── apiNode.js          ← NEW
│   │   │   └── conditionNode.js    ← NEW
│   │   ├── App.js
│   │   ├── ui.js
│   │   ├── toolbar.js
│   │   ├── submit.js               ← Backend integration
│   │   ├── store.js
│   │   └── draggableNode.js
│   └── package.json
└── backend/
    └── main.py                     ← API & DAG detection

```

---

## 🧪 Testing Checklist

- [ ] Frontend starts without errors
- [ ] Backend starts without errors
- [ ] Can drag nodes onto canvas
- [ ] Can connect nodes with edges
- [ ] Text node creates handles for variables
- [ ] Text node resizes with content
- [ ] Submit button sends data to backend
- [ ] Alert displays with correct information
- [ ] DAG detection works (test with and without cycles)

---

## 📝 Example Pipeline to Test

1. Drag an **Input** node to canvas
2. Drag a **Text** node to canvas
3. In Text node, type: `"Processing {{data}} from input"`
4. Connect Input output → Text "data" input
5. Drag an **LLM** node
6. Connect Text output → LLM prompt
7. Drag an **Output** node
8. Connect LLM response → Output input
9. Click **Submit Pipeline**

Expected result:
- 4 nodes
- 3 edges
- Is DAG: ✓ Yes

---

## 💡 Tips

- Use the **MiniMap** (bottom right) to navigate large pipelines
- Use **Controls** (bottom left) for zoom/pan/fit view
- Hold **Shift** while dragging to select multiple nodes
- Double-click canvas background to deselect all

---

## 📞 Support

If you encounter issues:
1. Check console for error messages (F12 in browser)
2. Verify both frontend and backend are running
3. Check the IMPLEMENTATION.md for detailed documentation
4. Restore files from original if needed

---

## ✅ Success Criteria

You'll know everything is working when:
1. ✓ You can create and connect all 9 node types
2. ✓ Text nodes show variable badges and handles
3. ✓ Submit button shows pipeline analysis
4. ✓ UI looks polished with dark theme
5. ✓ No console errors

Enjoy building pipelines! 🎉
