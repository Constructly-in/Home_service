const propertyData = [
  {
    id: 'P1',
    name: 'Cozy Cottage',
    location: '123 Main St, Anytown, USA',
    phone: '555-555-5555',
    price: '1,200',
    photo: {uri:  "https://i.ibb.co/x632Zx5/HOME.png"},

    image_array:[
      {uri: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"},
      {
        uri:"https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      },
      {
        uri:"https://images.pexels.com/photos/2635038/pexels-photo-2635038.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      }
    ],

    prominence: 'High',
    description: 'Charming one-bedroom cottage with a private backyard and a cozy living room. Perfect for a quiet retreat.',
    index: 0,
    type: 'PG' ,

  },
  {
    id: 'P2',
    name: 'Modern Apartment',
    location: '456 Elm St, Anytown, USA',
    phone: '555-555-5556',
    price: '1,500',
    photo: {uri:  "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"},
    image_array:[
      {uri: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"},
      {
        uri:"https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      },
      {
        uri:"https://images.pexels.com/photos/2635038/pexels-photo-2635038.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      }
    ],
    prominence: 'Medium',
    description: 'Spacious one-bedroom apartment with a modern kitchen and a large balcony. Close to public transportation.',
    index: 1,
    type: 'Plot'
  },
  {
    id: 'P3',
    name: 'Luxury Mansion',
    location: '789 Oak St, Anytown, USA',
    phone: '555-555-5557',
    price: '2,500',
    photo: {uri:  "https://i.ibb.co/x632Zx5/HOME.png"},
    image_array:[
      {uri: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"},
      {
        uri:"https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      },
      {
        uri:"https://images.pexels.com/photos/2635038/pexels-photo-2635038.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      }
    ],
    prominence: 'High',
    description: 'Stunning luxury mansion with five bedrooms, a private pool, and a movie theater. Perfect for a large family or corporate retreat.',
    index: 3,
    type: 'Flat',
  },
  {
    id: 'P4',
    name: 'Cozy Condo',
    location: '901 Maple St, Anytown, USA',
    phone: '555-555-5558',
    price: '1,000',
    photo: {uri:  "https://i.ibb.co/x632Zx5/HOME.png"},
    image_array:[
      {uri: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"},
      {
        uri:"https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      },
      {
        uri:"https://images.pexels.com/photos/2635038/pexels-photo-2635038.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      }
    ],
    prominence: 'Medium',
    description: 'Cozy one-bedroom condo with a modern kitchen and a private balcony. Close to downtown Anytown.',
    index: 4,
    type:'PG'
  },
  {
    id: 'P5',
    name: 'Rustic Cabin',
    location: '111 Pine St, Anytown, USA',
    phone: '555-555-5559',
    price: '800',
    photo: {uri:  "https://i.ibb.co/x632Zx5/HOME.png"},
    image_array:[
      {uri: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"},
      {
        uri:"https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      },
      {
        uri:"https://images.pexels.com/photos/2635038/pexels-photo-2635038.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      }
    ],
    prominence: 'High',
    description: 'Rustic cabin with a private hot tub and a beautiful view of the surrounding woods. Perfect for a relaxing getaway.',
    index: 5,
    type: 'PG'
  },
];

export default propertyData;