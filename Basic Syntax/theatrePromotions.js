function theatrePromotions(type, age) {

    if (0 <= age && age <= 18) {
        if (type === 'Weekday') {
            console.log('12$');
        } else if (type === 'Weekend') {
            console.log('15$');
        } else {
            console.log('5$')
        }
    }
    else if (18 < age && age <= 64) {
        if (type === 'Weekday') {
            console.log('18$');
        } else if (type === 'Weekend') {
            console.log('20$');
        } else {
            console.log('12$')
        }
    }
    else if (64 < age && age <= 122) {
        if (type === 'Weekday') {
            console.log('12$');
        } else if (type === 'Weekend') {
            console.log('15$');
        } else {
            console.log('10$')
        }
    }
    else {
        console.log('Error!');
    }
}

theatrePromotions('Holiday', 15)