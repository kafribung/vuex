import * as mutationsType from './mutation-types'

export default {
    [mutationsType.SHOW_MEMBER](state, member) {
        state.singelView = true;
        state.activeMember = member;
    },

    [mutationsType.SHOW_MEMBERS](state) {
        state.singelView = false;
        state.activeMember = null;
    },
    [mutationsType.ADD_MEMBER](state) {
        state.singelView = true;
        state.activeMember = {
            id: new Date(),
            nama: '',
            point: '',
            img: ''
        }
        state.members.push(state.activeMember);
    },
    [mutationsType.REMOVE_MEMBER](state, id) {
        state.members = state.members.filter((member) => {
            return member.id != id;
        })
    }

}