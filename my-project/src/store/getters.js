// Mengambil data dari state

export default {
    members: state => {
        return state.members.sort((a, b) => {
            return a['point'] > b['point'];
        })
    },

    singelView: state => {
        return state.singelView;
    },

    activeMember: state => {
        return state.activeMember;
    }
}