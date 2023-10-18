import { Group } from "@/components/Group/Group";
import { Typography } from "@/components/Typography/Typography";

export const MainPage = () => {
  return (
    <div>
      <Group variant="vertical">
        <Typography variant="header">Typography header</Typography>
        <Typography variant="big">Typography big</Typography>
        <Typography variant="normal">Typography normal</Typography>
      </Group>
    </div>
  );
};
