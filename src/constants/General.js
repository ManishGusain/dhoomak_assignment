import veggie from '../assets/vegetables.png';
import rice from '../assets/rice.png';
import dal from '../assets/dal.png';
import milk from '../assets/milk.png';
import oil from '../assets/oil.png';
import flour from '../assets/flour.png';
import menu from '../assets/menu.png';
import discovery from '../assets/discovery.png';
import inventory from '../assets/inventory.png';
import marketing from '../assets/marketing.png';

export const imgUri = "https://images.unsplash.com/photo-1490818387583-1baba5e638af?q=80&w=1464&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";


export const HomeitemData = [
    { id: 1, itemName: 'Inventory', itemImage: inventory, navTo: 'Inventory' },
    { id: 2, itemName: 'Discovery', itemImage: discovery, navTo: '' },
    { id: 3, itemName: 'Digi Menu', itemImage: menu, navTo: '' },
    { id: 4, itemName: 'Marketing', itemImage: marketing, navTo: '' },
];

export const itemData = [
    { id: 1, itemName: 'Vegetables', itemImage: veggie, navTo: 'CategoryDetails', quantity: 100, },
    { id: 2, itemName: 'Rice', itemImage: rice, navTo: 'CategoryDetails', quantity: 359 },
    { id: 3, itemName: 'Pulses (Dal)', itemImage: dal, navTo: 'CategoryDetails', quantity: 1002 },
    { id: 4, itemName: 'Milk', itemImage: milk, navTo: 'CategoryDetails', quantity: 853 },
    { id: 5, itemName: 'Atta', itemImage: flour, navTo: 'CategoryDetails', quantity: 250 },
    { id: 6, itemName: 'Oil', itemImage: oil, navTo: 'CategoryDetails', quantity: 520 },
  ];


export const categories = [
    {
      id: 1,
      name: `Vegetable`,
      imageUri: veggie,
    },
    {
      id: 2,
      name: `Rice`,
      imageUri: rice,
    },
    {
      id: 3,
      name: `Dal`,
      imageUri: dal,
    },
    {
      id: 4,
      name: `Milk`,
      imageUri: milk,
    },
    {
      id: 5,
      name: `Atta`,
      imageUri: flour,
    },
    {
      id: 6,
      name: `Oil`,
      imageUri: oil,
    },
  ];

  export const selectedCategoryData = {
    1: [
      {
        id: 1,
        itemName: 'Aashirvaad Atta',
        itemImage: imgUri,
        subTitle: 'Sharbati Wheat',
        quantity: '25',
        price: '80',
      },
      {
        id: 2,
        itemName: 'Sunflower Oil',
        itemImage: imgUri,
        subTitle: 'Refined  Oil',
        quantity: '5',
        price: '120',
      },
      {
        id: 3,
        itemName: 'Tata Tea Gold',
        itemImage: imgUri,
        subTitle: 'Premium Assam Tea',
        quantity: '100',
        price: '250',
      },
      {
        id: 4,
        itemName: 'Maggi Noodles',
        itemImage: imgUri,
        subTitle: 'Masala Flavor',
        quantity: '6',
        price: '12',
      },
      {
        id: 5,
        itemName: 'Colgate Toothpaste',
        itemImage: imgUri,
        subTitle: 'Anti-Cavity',
        quantity: '2',
        price: '40',
      },
      {
        id: 6,
        itemName: 'Dettol Handwash',
        itemImage: imgUri,
        subTitle: 'Original',
        quantity: '1',
        price: '60',
      },
    ],
    2: [
      {
        id: 7,
        itemName: 'Lays Potato Chips',
        itemImage: imgUri,
        subTitle: 'Classic Salted',
        quantity: '3',
        price: '20',
      },
      {
        id: 8,
        itemName: 'Orange Juice',
        itemImage: imgUri,
        subTitle: '100% Pure',
        quantity: '1',
        price: '90',
      },
      {
        id: 9,
        itemName: 'Dove Shampoo',
        itemImage: imgUri,
        subTitle: 'Intense Repair',
        quantity: '2',
        price: '150',
      },
      {
        id: 10,
        itemName: 'Pampers Diapers',
        itemImage: imgUri,
        subTitle: 'Medium Size',
        quantity: '50',
        price: '300',
      },
    ],
    3: [
      {
        id: 11,
        itemName: 'Dove Shampoo',
        itemImage: imgUri,
        subTitle: 'Intense Repair',
        quantity: '2',
        price: '150',
      },
      {
        id: 12,
        itemName: 'Pampers Diapers',
        itemImage: imgUri,
        subTitle: 'Medium Size',
        quantity: '50',
        price: '300',
      },
      {
        id: 8,
        itemName: 'Orange Juice',
        itemImage: imgUri,
        subTitle: '100% Pure',
        quantity: '1',
        price: '90',
      },
    ],
    4: [
      {
        id: 8,
        itemName: 'Tropicana Juice',
        itemImage: imgUri,
        subTitle: '100% Pure',
        quantity: '1',
        price: '90',
      },
      {
        id: 10,
        itemName: 'Pampers Diapers',
        itemImage: imgUri,
        subTitle: 'Medium Size',
        quantity: '50',
        price: '300',
      },
    ],
    5:[
      {
        id: 10,
        itemName: 'Pampers Diapers',
        itemImage: imgUri,
        subTitle: 'Medium Size',
        quantity: '50',
        price: '300',
      },
      {
        id: 11,
        itemName: 'Dove Shampoo',
        itemImage: imgUri,
        subTitle: 'Intense Repair',
        quantity: '2',
        price: '150',
      },
    ],
    6:[
      {
        id: 11,
        itemName: 'Dove Shampoo',
        itemImage: imgUri,
        subTitle: 'Intense Repair',
        quantity: '2',
        price: '150',
      },
      {
        id: 6,
        itemName: 'Dettol Handwash',
        itemImage: imgUri,
        subTitle: 'Original',
        quantity: '1',
        price: '60',
      },
    ]
  };