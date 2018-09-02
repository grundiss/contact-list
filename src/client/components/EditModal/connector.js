import {connect} from 'react-redux';
import * as actions from '../../store/actions';

function mapStateToProps(state) {
  return {
    isOpen: state.appState.isEditModalOpen,
    entry: state.appState.currentEntry || {},
    errors: state.appState.errors,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onChange(fieldName) {
      return function({target: {value}}){
        dispatch(actions.onEditField(fieldName, value))
      }
    },
    onClose() {
      dispatch(actions.onCloseEdittingModal())
    },
    onSave() {
      dispatch(actions.onSave())
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps);