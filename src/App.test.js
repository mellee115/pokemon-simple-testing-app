import React, {Component} from 'react';
import {App, setMewData, setDittoData, setCorsolaData, setUnownData} from './App';
import Enzyme, {shallow} from 'enzyme';
import {expect} from 'chai';
import Adapter from 'enzyme-adapter-react-16';
import axios from 'axios';

//pokemon data
import {unownData} from './unownData.js';
import {mewData} from './mewData.js';
import {dittoData} from './dittoData.js';
import {corsolaData} from './corsolaData.js';

Enzyme.configure({adapter: new Adapter()});

//1. this is what signals Jest to use the mocked implementation of axios
jest.mock('axios');

describe('The Pokemon testing App ', () => {
    //good practice
    afterEach(() => {
        jest.clearAllMocks();
    });

    //Enzyme
    const wrapper = shallow(<App/>);

    it('renders itself.', () => {
        expect(wrapper).to.have.lengthOf(1);
    });

    //done parameter must be provided
    it('fetches data Mew data through mocking.', (done) => {
        //2. make the basic mock more specific
       axios.get.mockImplementation(() => Promise.resolve({
            data: mewData
        }));

        //3. carry out the test
        wrapper.instance().setMewData();

        //setImmediate will run a callback function immediately after the browser has completed operations such as events
        setImmediate(() => {
                //4. update the state so values can get populated
                wrapper.update();

                //5. set your expectations and check
                expect(wrapper.instance().state.mewData).to.equal(mewData);
                //call done so Jest test can complete otherwise timeout will occur
                done();
            }
        );
    });

    it('fetches data Ditto data through mocking.', (done) => {
        axios.get.mockImplementation(() => Promise.resolve({
            data: dittoData
        }));

        wrapper.instance().setDittoData();
        setImmediate(() => {
                wrapper.update();

                expect(wrapper.instance().state.dittoData).to.equal(dittoData);
                done();
            }
        );
    });

    it('fetches data Corsola data through mocking.', (done) => {
        axios.get.mockImplementation(() => Promise.resolve({
            data: corsolaData
        }));

        wrapper.instance().setCorsolaData();
        setImmediate(() => {
                wrapper.update();

                expect(wrapper.instance().state.corsolaData).to.equal(corsolaData);
                done();
            }
        );
    });

    it('fetches data Unown data through mocking.', (done) => {
        axios.get.mockImplementation(() => Promise.resolve({
            data: unownData
        }));

        wrapper.instance().setUnownData();
        setImmediate(() => {
                wrapper.update();

                expect(wrapper.instance().state.unownData).to.equal(unownData);
                done();
            }
        );
    });
});

