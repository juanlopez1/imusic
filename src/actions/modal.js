export const MODAL_SHOW_REQUESTED = 'MODAL_SHOW_REQUESTED';
export const MODAL_HIDE_REQUESTED = 'MODAL_HIDE_REQUESTED';

export const requestedShowModal = modalType => ({
    type: MODAL_SHOW_REQUESTED, modalType
});

export const requestedHideModal = () => ({
    type: MODAL_HIDE_REQUESTED
});
