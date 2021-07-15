import PropTypes from "prop-types";

import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

import NotesList from "components/NotesList/NotesList";

import useStyles from "./styled.js";

const SharedNotes = ({notes, activeNoteId, setActiveNoteId, getActiveNote}) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <h1>My Shared list of Notes</h1>
          </Paper>
        </Grid>
        <Grid item xs={4}>
          <NotesList
            notes={notes}
            activeNoteId={activeNoteId}
            setActiveNoteId={setActiveNoteId}
            isEditMode={false}
            setIsEditMode={null}
            isSharedMode={true}
          />
        </Grid>
        <Grid item xs={8}>
          <Paper className={classes.paper}>
            {getActiveNote() ? (
              <p>{getActiveNote().description}</p>
            ) : (
              <div>No Active Note</div>
            )}
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};
SharedNotes.propTypes = {
  activeNoteId: PropTypes.number,
  notes: PropTypes.arrayOf(PropTypes.object),
  setActiveNoteId: PropTypes.func,
  getActiveNote: PropTypes.func,
  isSharedMode: PropTypes.bool,
};
export default SharedNotes;
