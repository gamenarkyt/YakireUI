import { Button } from "@/components/Button/Button";
import { Group } from "@/components/Group/Group";
import { Typography } from "@/components/Typography/Typography";

import styles from "./MainPage.module.css";
import { Divider } from "@/components/Divider/Divider";
import { Input } from "@/components/Input/Input";

export const MainPage = () => {
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
      <Group>
        <Input leftComponents={<>left</>} rightComponents={<>right</>} />
      </Group>

      <Group variant="vertical"></Group>
    </div>
  );
};
