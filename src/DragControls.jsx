import React, { useState, useEffect, useRef } from 'react';

const DragControls = ({ selectedMesh }) => {
  const [dragging, setDragging] = useState(false);
  const [initialPosition, setInitialPosition] = useState(null);
  const [axis, setAxis] = useState('x'); 

  const handleMouseDown = (event) => {
    setDragging(true);
    setInitialPosition(selectedMesh.position.clone());
  };

  const handleMouseUp = () => {
    setDragging(false);
  };

  const handleMouseMove = (event) => {
    if (dragging && selectedMesh) {
      const movementFactor = 0.01; 
      const delta = event.movementX * movementFactor;

      switch (axis) {
        case 'x':
          selectedMesh.position.x = initialPosition.x + delta;
          break;
        case 'y':
          selectedMesh.position.y = initialPosition.y + delta;
          break;
        case 'z':
          selectedMesh.position.z = initialPosition.z + delta;
          break;
        default:
          break;
      }
    }
  };
  
  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [dragging]);

  return null; 
};

export default DragControls;