import { makeStyles } from "@griffel/react";
import { Button } from "harmony-ui";

const useClasses = makeStyles({
  root: {
    backgroundColor: "#fff",
    padding: "100px",
  },
});

export const Custom = () => {
  const styles = useClasses();
  return (
    <div className={styles.root}>
      <Button primary label="Button" />
    </div>
  );
};