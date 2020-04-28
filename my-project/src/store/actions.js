import * as mutationsType from './mutation-types'

export default {
    showMember(context, member) {
        //memanggil mutatiosn

        context.commit(mutationsType.SHOW_MEMBER, member);
    },
    showMembers(context) {
        context.commit(mutationsType.SHOW_MEMBERS);
    },
    addMembers(context) {
        context.commit(mutationsType.ADD_MEMBER);
    },
    removeMember(context, id) {
        context.commit(mutationsType.REMOVE_MEMBER, id);
        // Untuk memanggil metode si actions (pakai dispatch)
        context.dispatch('showMembers');
    }

}