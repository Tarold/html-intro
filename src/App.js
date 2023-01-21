import React, { useState } from 'react';

export default function App() {
  const InnerComponentWithNewProp = withNewProp(InnerComponent);
  return (
    <div>
      App
      <InnerComponentWithNewProp ownProp="ownProp" />
    </div>
  );
}

function withNewProp(WrappedComponent) {
  function NewComponent(props) {
    const [newProp, setNewProp] = useState(10);
    return <WrappedComponent newProp={newProp} {...props} />;
  }

  return NewComponent;
}

function InnerComponent(props) {
  return (
    <div>
      {props.ownProp ?? 'Prop is wissing'}
      {props.newProp}
    </div>
  );
}
