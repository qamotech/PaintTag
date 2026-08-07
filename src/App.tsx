/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { Plus, Camera, Trash2, FileText } from 'lucide-react';

interface PaintRecord {
  id: number;
  property: string;
  room: string;
  color: string;
  formula: string;
}

export default function App() {
  const [paints, setPaints] = useState<PaintRecord[]>([]);
  const [showAdd, setShowAdd] = useState(false);
  const [newPaint, setNewPaint] = useState({ property: '', room: '', color: '', formula: '' });

  const addPaint = () => {
    setPaints([...paints, { id: Date.now(), ...newPaint }]);
    setNewPaint({ property: '', room: '', color: '', formula: '' });
    setShowAdd(false);
  };

  return (
    <div className="p-6 max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">PaintTag Vault</h1>
      <button 
        onClick={() => setShowAdd(!showAdd)}
        className="bg-blue-600 text-white px-4 py-2 rounded-lg mb-6 flex items-center gap-2"
      >
        <Plus size={20} /> Add New Paint
      </button>

      {showAdd && (
        <div className="bg-white p-4 rounded-lg shadow mb-6 border">
          <input className="w-full mb-2 p-2 border rounded" placeholder="Property Name" value={newPaint.property} onChange={e => setNewPaint({...newPaint, property: e.target.value})} />
          <input className="w-full mb-2 p-2 border rounded" placeholder="Room" value={newPaint.room} onChange={e => setNewPaint({...newPaint, room: e.target.value})} />
          <input className="w-full mb-2 p-2 border rounded" placeholder="Color Name" value={newPaint.color} onChange={e => setNewPaint({...newPaint, color: e.target.value})} />
          <textarea className="w-full mb-2 p-2 border rounded" placeholder="Formula" value={newPaint.formula} onChange={e => setNewPaint({...newPaint, formula: e.target.value})} />
          <button onClick={addPaint} className="bg-green-600 text-white px-4 py-2 rounded">Save</button>
        </div>
      )}

      <div className="space-y-4">
        {paints.map(paint => (
          <div key={paint.id} className="bg-white p-4 rounded-lg shadow border flex justify-between items-center">
            <div>
              <h3 className="font-bold">{paint.color}</h3>
              <p className="text-gray-600 text-sm">{paint.property} • {paint.room}</p>
            </div>
            <div className='flex gap-2'>
              <button className='text-gray-500'><FileText /></button>
              <button onClick={() => setPaints(paints.filter(p => p.id !== paint.id))} className='text-red-500'><Trash2 /></button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
