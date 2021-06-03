import React from "react";
import Gallery from "./Gallery";
import Enzyme, { shallow, render, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() })
import store from "../../store/store";

describe('<Gallery>', () => {
    it('renders Gallery Component', () => {
        shallow(<Gallery store={store}/>)
    });
});