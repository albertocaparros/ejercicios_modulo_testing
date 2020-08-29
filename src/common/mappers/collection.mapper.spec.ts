import { mapToCollection } from './collection.mapper';
import * as apiModel from '../../pods/hotel-collection/hotel-collection.api';
import * as viewModel from '../../pods/hotel-collection/hotel-collection.vm';
import { mapFromApiToVm } from '../../pods/hotel-collection/hotel-collection.mapper';

describe('Test de mappers/collection', () => {
  it('Should return an empty array when passing anything different than apiModel ', () => {
    //ARRANGE
    const passingNull = null;
    const passingUndefined = undefined;
    const passingEmpty = [];

    //ACT
    const returningNull = mapToCollection(passingNull, (test) => {
      return test;
    });
    const returningUndefined = mapToCollection(passingUndefined, (test) => {
      return test;
    });
    const returningEmpty = mapToCollection(passingEmpty, (test) => {
      return test;
    });

    //ASSERT
    expect(returningNull).toEqual([]);
    expect(returningUndefined).toEqual([]);
    expect(returningEmpty).toEqual([]);
  });

  it('Should return a object mapped using the function passed ', () => {
    //ARRANGE
    function funct(p1) {
      return p1;
    }
    const array = ['hola', 2, 30, 'adios'];

    //ACT

    let result = mapToCollection(array, funct);

    //ASSERT
    expect(result).toEqual(array.map(funct));
  });

  it('Should return the expected object when mapping using hotel-collection mapper ', () => {
    //ARRANGE
    const passedObject = [
      {
        id: '0248058a-27e4-11e6-ace6-a9876eff01b3',
        type: 'hotel',
        name: 'Motif Seattle',
        created: new Date(1464777092568),
        modified: new Date(1464777618676),
        address1: '1415 5th Ave',
        airportCode: 'SEA',
        amenityMask: 7798786,
        city: 'Seattle',
        confidenceRating: 52,
        countryCode: 'US',
        deepLink:
          'http://www.travelnow.com/templates/55505/hotels/125727/overview?lang=en&amp;currency=USD&amp;standardCheckin=null/null/null&amp;standardCheckout=null/null/null',
        highRate: 289,
        hotelId: 1257278,
        hotelInDestination: true,
        hotelRating: 4,
        location: {
          latitude: 47.60985,
          longitude: -122.33475,
        },
        locationDescription: 'Near Pike Place Market',
        lowRate: 259,
        metadata: {
          path: '/hotels/0248058a-27e4-11e6-ace6-a9876eff01b3',
        },
        postalCode: 98101,
        propertyCategory: 1,
        proximityDistance: 11.168453,
        proximityUnit: 'MI',
        rateCurrencyCode: 'USD',
        shortDescription:
          'With a stay at Motif Seattle, you will be centrally located in Seattle, steps from 5th Avenue Theater and minutes from Pike Place Market. This 4-star hotel is within',
        stateProvinceCode: 'WA',
        thumbNailUrl: '/thumbnails/50947_264_t.jpg',
        tripAdvisorRating: 3.5,
        tripAdvisorRatingUrl:
          'http://www.tripadvisor.com/img/cdsi/img2/ratings/traveler/3.5-12345-4.gif',
      },
    ];

    const returnedObject: viewModel.HotelEntityVm = {
      id: '0248058a-27e4-11e6-ace6-a9876eff01b3',
      picture: 'http://localhost:3000/thumbnails/50947_264_t.jpg',
      name: 'Motif Seattle',
      description:
        'With a stay at Motif Seattle, you will be centrally located in Seattle, steps from 5th Avenue Theater and minutes from Pike Place Market. This 4-star hotel is within',
      rating: 4,
      address: '1415 5th Ave',
    };

    //ACT
    const result = mapToCollection(passedObject, mapFromApiToVm);
    const expectedResult = passedObject.map(mapFromApiToVm);

    //ASSERT
    expect(result).toEqual(expectedResult);
  });
});
