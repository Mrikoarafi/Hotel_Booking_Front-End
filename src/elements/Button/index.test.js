import React from 'react';
//fungsi untuk ngetest,bawaan react
import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
// mengambil button yang di export di index
import Button from './index';

// cek jika isdisabled
test('Should not allowed click button if isDisabled is present', () => {
	const { container } = render(<Button isDisabled></Button>);
	expect(container.querySelector('span.disabled')).toBeInTheDocument();
});

// cek jika isloading
test('Should render loading/spinner', () => {
	const { container, getByText } = render(<Button isLoading></Button>);
	//  regesh,mencari di kalimat tersebut apakah ada kata loading,dan i membuat string jadi huruf kecil
	expect(getByText(/loading/i)).toBeInTheDocument();
	expect(container.querySelector('span')).toBeInTheDocument();
});

// cek jika tag a
test(`Should render <a> tag`, () => {
	const { container } = render(<Button type="link" isExternal></Button>);
	expect(container.querySelector('a')).toBeInTheDocument();
});

// cek jika link component
test(`Should render <Link> component`, () => {
	const { container } = render(
		<Router>
			<Button href="" type="link"></Button>
		</Router>
	);
	expect(container.querySelector('a')).toBeInTheDocument();
});
