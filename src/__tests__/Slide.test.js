import React from 'react';
import { shallow } from 'enzyme';
import Slide from '../Slide';

it('renders without crashing', () => {
  shallow(<Slide />);
})

it('initially renders with the first image', () => {
  const wrapper = shallow(<Slide />)
  const image = <img src="https://lh3.googleusercontent.com/y6JGH-kgKKTChqCNEvtGUbSw3x7S4R1Y5uvCoj6desKVqIvBPyI6uwJz8q2ACUzx5FcFH9tgH4iltGa2G5XR8t98HqgZBuZHsXF9D-YUaq2Bu3P3i5gXPZFXSyv3pfEJkx2UGWCXEH2fuqLduyXyaaIMjqhe1-0InYIjTymy3PjSz5PrL6gu8FzyKGyQdlsFJJPXiboVxosEfWeqP_BBErSYHuBAwyrJuQeGgD9fg7Hx9lA9QUqFddsIqmAO-7giw_Oi3Yk6QK7HUI52HeIyvctMhvTQMYE68RZyV-ggzs3X_Me0F6wUP6PvjCu9DOTn3Huec4vneeIZrcnwEuL6wDYvwjEiDr92-HdTmTAbyN3V2ymN5lyBr0gHihGEJt0liuxaTKZZp0BKX44F4PAyxlngHtDpshfYO1y4h0BxRM_sR0g1M8b2HTsNHWP-ye3r5gQQRw8POHoNLWJpur2UTpM29L-nlK_qdCjl0yyp8RCpGpR1fso9qtVw276jKF-YllcnofBkzYFdTasa28ywrGupr3CC6_fn2t6A_z-qfMaUNo-8leo7EC-6d7rHgSi2=w1280-h658" />
  expect(wrapper.contains(image)).toEqual(true)
})
