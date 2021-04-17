import React, { useState } from "react";
import { Form, Input, Button } from "semantic-ui-react";
import './ProgramForm.css';

export const ProgramForm = () => {
  const [program, setProgram] = useState("");

  return (
    <Form>
      <Form.Field className="input-field">
        <Input
          value={program}
          onChange={e => setProgram(e.target.value)}
        />
      </Form.Field>
      <Form.Field>
        <Button
          onClick={async () => {
            const effect = { program };
            const response = await fetch("/effects/desk-led", {
              method: "PUT",
              headers: {
                "Content-Type": "application/json"
              },
              body: JSON.stringify(effect)
            });

            if (response.ok) {
              console.log("Successfully set desk-led to " + program);
              setProgram("");
              var elements = document.getElementsByClassName('script-bf-box');
              for (const x of Array(5).keys()) {
                elements[x].style.backgroundColor = program;
              }
            }
          }}
        >
          O
        </Button>
      </Form.Field>
    </Form>
  );
};
