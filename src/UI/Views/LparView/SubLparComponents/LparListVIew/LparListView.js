import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Card from '../LparCard/LparCard';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    margin: 20,

  },
  card: {
    height: 140,
    width: 100
  },
  control: {
    padding: theme.spacing(2)
  }
}));

export default function SpacingGrid() {
  const [spacing, setSpacing] = React.useState(2);

  const classes = useStyles();

  const handleChange = event => {
    setSpacing(Number(event.target.value));
  };

  return (
    <Grid container className={classes.root} spacing={2}>
      <Grid item xs={12}>
        <Grid container justify="left" spacing={spacing}>
          {/* {[0, 1, 2].map(value => ( */}
          <Grid item>
            <Card className={classes.card} />
          </Grid>
          {/* ))} */}
          <Grid item>
            <Card elevation={1} className={classes.card} />
          </Grid>
          <Grid item>
            <Card className={classes.card} />
          </Grid>
          <Grid item>
            <Card className={classes.card} />
          </Grid>
          <Grid item>
            <Card className={classes.card} />
          </Grid>
          <Grid item>
            <Card className={classes.card} />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
