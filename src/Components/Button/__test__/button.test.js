import React from 'react';
import ReactDOM from 'react-dom';
import Button from './../button';

import {render,cleanup} from '@testing-library/react';
import renderer from "react-test-renderer";
//import "jest-dom/extend-expect";

afterEach(cleanup);

it("renders without crashing ",()=>{
    const div=document.createElement("div");
    ReactDOM.render(<Button></Button>,div);



})

it("renders button correctly ",() =>{
   const {getByTestId}= render(<Button label="Click me"></Button>)
   expect(getByTestId('button')).toHaveTextContent("Click me");


})

it("renders button correctly",() =>{
    const{getByTestId} = render(<Button label="save" />);
    expect(getByTestId("button")).toHaveTextContent("save");
});

it("Matches snapshots 1",() =>{
    const tree =renderer.create(<Button label="save"></Button>).toJSON();
    expect(tree).toMatchSnapshot();
})
it("Matches snapshots 2",() =>{
    const tree =renderer.create(<Button label="Click me"></Button>).toJSON();
    expect(tree).toMatchSnapshot();
})