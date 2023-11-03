// Define the interface for the data structure
export interface linkServiceDetail {
  id: number;
  url: string;
  title: string;
  description: string | null;
  img: string;
}

// Function to get data
const getData = (): linkServiceDetail[] => {
  return [
    {
      id: 1,
      url: '/service',
      title: 'ALL SERVICE',
      description: '',
      img: 'service/services.svg'
    },
    {
      id: 2,
      url: '/service/lasting-power-of-attorney',
      title: 'LASTING POWER OF ATTORNEY',
      description: 'A LPA is a legal document that allows a person who is at least 21 years old (“the donor”), to appoint one or more persons (“the donee(s)’’) to make decisions and act on his behalf in the event that he loses his mental capacity.',
      img: '/service/lpo.svg'
    },
    {
      id: 3,
      url: '/service/letters-of-administration',
      title: 'LETTERS OF ADMINISTRATION',
      description: 'He grant of letters of administration provides the appointed administrator with the authority to administer the deceased’s estate and distribute the assets pursuant to the intestate laws of Singapore.',
      img: '/service/leter.svg'
    },
    {
      id: 4,
      url: '/service/probate',
      title: 'PROBATE',
      description: 'Probate is the process completed when a decedent leaves assets to distribute, such as bank accounts, real estate, and financial investments. Probate is the general administration of a deceased person\'s will or the estate of a deceased person without a will.',
      img: '/service/probate.svg'
    },
    {
      id: 5,
      url: '/service/wills',
      title: 'WILLS',
      description: 'Drafting a Will allows you to decide on how your assets are to be distributed. In the absence of a Will, your assets will be distributed in accordance with the rules of distribution as set out in the Intestate Succession Act (Cap. 146).',
      img: '/service/services.svg'
    }
  ]
}

export { getData }
