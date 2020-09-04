import React from 'react';
import { render, screen, act } from '@testing-library/react';

import { HotelCollectionComponent } from './hotel-collection.component';

describe('Login component specs', () => {
  it('Should show the hotel information when rendered', () => {
    //Arrange
    const props = {
      hotelCollection: [
        {
          address: '1900 5th Ave',
          description:
            "With a stay at The Westin Seattle, you'll be centrally laocated in Seattle, steps from Westlake Center and minutes from Pacific Place. This 4-star hotel is close to",
          id: '024bd61a-27e4-11e6-ad95-35ed01160e57',
          name: 'The Westin Seattle',
          picture: 'http://localhost:3000/thumbnails/16673_260_t.jpg',
          rating: 4,
        },
      ],
    };

    //Act
    render(<HotelCollectionComponent {...props} />);

    const addressElement = screen.queryByText(props.hotelCollection[0].address);
    const descriptionElement = screen.queryByText(
      props.hotelCollection[0].description
    );
    const nameElement = screen.queryByText(props.hotelCollection[0].name);

    //Assert
    expect(addressElement).toBeInTheDocument();
    expect(descriptionElement).toBeInTheDocument();
    expect(nameElement).toBeInTheDocument();
  });
});
