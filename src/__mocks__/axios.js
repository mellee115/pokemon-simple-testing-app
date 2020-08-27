//1. provide a basic mock implementation
export default {
    get: jest.fn(() => Promise.resolve({data: {}}))
}