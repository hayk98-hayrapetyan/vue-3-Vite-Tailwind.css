import {ref} from "vue";

export function form_validate(form){
    let empty = ref(false);
    for (let a in form){
        if(!form[a]){
            return empty = true;
        }
    }

    return {empty}
}