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
              console.log("Successful response received!");
              setProgram("");
            }
          }}
        >
          O
        </Button>
      </Form.Field>
    </Form>
  );
};
