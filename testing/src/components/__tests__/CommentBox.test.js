/*  

ENZYME NOT WORKING WITH REACT18

--------------------------------------------

import React from "react"
import {mount} from "enzyme"
import CommentBox from "../CommentBox"

let wrapped;

beforeEach(() => {
    wrapped = mount(<CommentBox/>)
});

afterEach(() => {
    wrapped.unmount();
});

it('has a text area and a button', () => {

    CHECKING IF THERE'S EXACTLY 1 INSTANCE OF TEXTAREA AND BUTTON

    expect(wrapped.find('textarea').length).toEqual(1);
    expect(wrapped.find('button').length).toEqual(1);
});


--------------------------------------------------
WE CAN USE "describe()" TO WRAP UP MULTIPLE TESTS !!!
--------------------------------------------------


it('has a text area that user can type into', () => {
    wrapped.find('textarea').simulate('change', {
        target: {value: 'new comment'}
    });

    FORCES COMPONENT TO INSTANTLY RERENDER BECAUSE SETSTATE IS ASYNCHRONOUS BY DEFAULT !!!
    wrapped.update(); 

    expect(wrapped.find('textarea').prop('value')).toEqual('new comment')

});

it('when form is submitted, text area gets emptied', () => {
    wrapped.find('textarea').simulate('change', {
        target: {value: 'new comment'}
    });

    wrapped.update();
    wrapped.find('form').simulate('submit');
    wrapped.update();

    expect(wrapped.find('textarea').prop('value')).toEqual('');

})



*/
