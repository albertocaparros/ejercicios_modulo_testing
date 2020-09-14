import React from 'react';
import { render, screen, act } from '@testing-library/react';

import { HotelCollectionContainer } from './hotel-collection.container';
import { useHotelCollection } from './hotel-collection.hook';
jest.mock('./hotel-collection.hook');
const mockedHotelCollection = useHotelCollection as jest.Mocked<any>;

describe('Login container specs', () => {
  it('Should show the hotel information when rendered', async () => {
    //Arrange

    const props = {
      hotelCollection: [
        {
          address: '1415 5th Ave',
          description:
            'With a stay at Motif Seattle, you will be centrally located in Seattle, steps from 5th Avenue Theater and minutes from Pike Place Market. This 4-star hotel is within',
          id: '0248058a-27e4-11e6-ace6-a9876eff01b3',
          name: 'Motif Seattle',
          picture: 'http://localhost:3000/thumbnails/50947_264_t.jpg',
          rating: 4,
        },
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
      loadHotelCollection: jest.fn(),
    };

    mockedHotelCollection.mockReturnValue(props);

    //Act

    await act(async () => {
      render(<HotelCollectionContainer />);
    });

    const addressElement = screen.getByText(props.hotelCollection[0].address);
    const descriptionElement = screen.getByText(
      props.hotelCollection[0].description
    );
    const nameElement = screen.getByText(props.hotelCollection[0].name);

    //Assert
    expect(props.loadHotelCollection).toHaveBeenCalled();
    expect(addressElement).toBeInTheDocument();
    expect(descriptionElement).toBeInTheDocument();
    expect(nameElement).toBeInTheDocument();
  });
});
