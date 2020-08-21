import React, { useState, useEffect } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";

const initialColor = {
  color: "",
  code: { hex: "" }
};

const ColorList = ({ colors, updateColors }) => {
  console.log(colors);
  const [editing, setEditing] = useState(false);
  const [colorToEdit, setColorToEdit] = useState(initialColor);
  const [colorId, setColoId] = useState(undefined)

  const editColor = color => {
    debugger
    setColoId(color.id)
    setEditing(true);
    setColorToEdit(color);
  };

  const saveEdit = e => {
    e.preventDefault();
    // Make a put request to save your updated color
    // think about where will you get the id from...
    // where is is saved right now?
    debugger
    axiosWithAuth().put(`/api/colors/${colorId}`, colorToEdit)
      .then(resp => {
        debugger
        //check data return by the server
        console.log(resp.data)

        //update the color on the gui with the one from ther server
        const updateColors = colors.map(aColor => {
          const isSameColorServerGUI = aColor.id === resp.data.id
          if (isSameColorServerGUI) {
            aColor = resp.data
          }
          return aColor
        })
        updateColors(updateColors)
      })
      .catch(error => console.error(error))
  };

  const deleteColor = color => {
    // close the edit option for a delete color
    setEditing(false)
    // make a delete request to delete this color
    axiosWithAuth().delete(`/api/colors/${color.id}`)
      .then(resp => {
        console.log(resp.data)
        const updateColors = colors.filter(aColor => aColor.id !== resp.data.id)
        updateColors(updateColors)
      })
      .catch(error => console.error(error))
    };
    

  return (
    <div className="colors-wrap">
      <p>colors</p>
      <ul>
        {colors.map(color => (
          <li key={color.color} onClick={() => editColor(color)}>
            <span>
              <span className="delete" onClick={e => {
                e.stopPropagation();
                deleteColor(color)
              }
              }>
                x
              </span>{" "}
              {color.color}
            </span>
            <div
              className="color-box"
              style={{ backgroundColor: color.code.hex }}
            />
          </li>
        ))}
      </ul>
      {editing && (
        <form onSubmit={saveEdit}>
          <legend>edit color</legend>
          <label>
            color name:
            <input
              onChange={e =>
                setColorToEdit({ ...colorToEdit, color: e.target.value })
              }
              value={colorToEdit.color}
            />
          </label>
          <label>
            hex code:
            <input
              onChange={e =>
                setColorToEdit({
                  ...colorToEdit,
                  code: { hex: e.target.value }
                })
              }
              value={colorToEdit.code.hex}
            />
          </label>
          <div className="button-row">
            <button type="submit">save</button>
            <button onClick={() => setEditing(false)}>cancel</button>
          </div>
        </form>
      )}
      <div className="spacer" />
      {/* stretch - build another form here to add a color */}
    </div>
  );
};

export default ColorList;
