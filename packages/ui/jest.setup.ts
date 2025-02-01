import '@testing-library/jest-dom';

// Mock cn utility
jest.mock('@/cn.ts', () => ({
cn: (...inputs: any[]) => inputs.join(' '),
}));

// Mock CSS modules
module.exports = new Proxy(
{},
{
    get: function getter(target, key) {
    if (key === '__esModule') {
        return false;
    }
    return key;
    },
},
);

