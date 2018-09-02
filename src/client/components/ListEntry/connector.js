import { connect } from "react-redux";
import * as actions from "../../store/actions";

function mapStateToProps(state, ownProps) {
  return {
    entry: state.data.find(({ id }) => id === ownProps.id)
  };
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    onEdit() {
      dispatch(actions.onEdit(ownProps.id));
    },
    onDelete() {
      dispatch(actions.onDelete(ownProps.id));
    }
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
);
