import React, { useEffect, useState, useRef } from 'react';
import ContentEditable from 'react-contenteditable';
import sanitizeHtml from 'sanitize-html';

const _ = require('lodash');

function Editor() {
  // eslint-disable-next-line no-unused-vars
  const [sanitizeConf, setSanitizeConf] = useState({
    allowedTags: ['b', 'i', 'em', 'strong', 'a', 'p', 'h1'],
    allowedAttributes: { a: ['href'] },
  });
  const [textEditable, setTextEditable] = useState('');
  const [html, setHtml] = useState(``);
  const [clickedOutside, setClickedOutside] = useState(true);
  const [italic, setItalic] = useState(false);
  const [bold, setBold] = useState(false);
  const inputRef = useRef();
  const bRef = useRef();
  const iRef = useRef();

  useEffect(() => {
    setHtml(textEditable);
    // setEditable(true);
  }, []);

  // const handleClickInside = () => setClickedOutside(false);
  const handleClickOutside = e => {
    if (
      _.isEmpty(inputRef.current.el.current) ||
      _.isEmpty(bRef.current) ||
      _.isEmpty(iRef.current)
    ) {
      return;
    }

    if (
      !inputRef.current.el.current.contains(e.target) &&
      !bRef.current.contains(e.target) &&
      !iRef.current.contains(e.target)
    ) {
      setClickedOutside(true);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  });

  const sanitize = () => {
    setHtml(sanitizeHtml(html, sanitizeConf));
  };

  // eslint-disable-next-line react/no-unstable-nested-components
  function EditButton(p) {
    const { cmd, arg, name } = p;

    let cn = 'unselect';
    switch (name.toLowerCase()) {
      case 'b': {
        cn = bold ? 'select' : 'unselect';
        break;
      }
      case 'i': {
        cn = italic ? 'select' : 'unselect';
        break;
      }
      default:
        break;
    }

    return (
      // eslint-disable-next-line react/button-has-type
      <button
        ref={name.toLowerCase() === 'b' ? bRef : iRef}
        disabled={clickedOutside}
        key={cmd}
        className={cn}
        onClick={evt => {
          evt.preventDefault(); // Avoids loosing focus from the editable area
          document.execCommand(cmd, false, arg); // Send the command to the browser

          switch (name.toLowerCase()) {
            case 'b': {
              setBold(!bold);
              break;
            }

            case 'i': {
              setItalic(!italic);
              break;
            }

            default:
              break;
          }
        }}
      >
        {name || cmd}
      </button>
    );
  }

  return (
    <div>
      <ContentEditable
        ref={inputRef}
        className="editable"
        tagName="pre"
        html={textEditable} // innerHTML of the editable div
        disabled={false} // use true to disable edition
        onChange={e => {
          setTextEditable(e.target.value);
        }} // handle innerHTML change
        onBlur={sanitize}
        onFocus={() => {
          setClickedOutside(false);
        }}
      />
      <div>
        <div>
          <EditButton cmd="bold" name="B" />
          <EditButton cmd="italic" name="i" />
        </div>
        {/* <div>
          <button onClick={props.onCancel}>Cancel</button>
          <button onClick={props.onPost}>Post</button>
        </div> */}
      </div>
    </div>
  );
}

export default Editor;
