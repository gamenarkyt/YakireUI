import { Button } from "@/components/Button/Button";
import { Group } from "@/components/Group/Group";
import { Typography } from "@/components/Typography/Typography";

import styles from "./MainPage.module.css";
import { Divider } from "@/components/Divider/Divider";
import { Input } from "@/components/Input/Input";
import { IconArrowNarrowRight } from "@tabler/icons-react";
import { useState } from "react";

export const MainPage = () => {
  const [text, setText] = useState("");
  const onSubmit = (event) => {
    event.preventDefault()
    let data = new FormData(event.target)
    data = Object.fromEntries(data.entries())
    alert(`Login to ${data.login} : ${data.password}`)
  };
  console.log("mainpage rerender");

  return (
    <div>
      <Group variant="vertical">
        <Typography variant="header">Typography header</Typography>
        <Typography variant="big">Typography big</Typography>
        <Typography variant="normal">Typography normal</Typography>
      </Group>
      {/* <Divider /> */}
      <Typography variant="header">Button components</Typography>
      <Group>
        <Button variant="normal">Normal Button</Button>
        <Button variant="outline">Otline Button</Button>
        <Button variant="ghost">Ghost Button</Button>
        <Button variant="normal" className={styles.custombutton}>
          Custom Button
        </Button>
      </Group>

      <Divider />
      <Typography variant="header">Input components</Typography>
      <Group variant="vertical">
        <form onSubmit={onSubmit}>
          <Typography>Login</Typography>
          <Input
            name="login"
            placeholder="Login"
          />
          <Typography>Password</Typography>
          <Input
            name="password"
            placeholder="Password"
          />
          <Button type="submit">Login</Button>
        </form>
      </Group>
      <Group variant="vertical"></Group>
    </div>
  );
};
