export interface serviceData {
  id: number;
  title: string;
  description: string;
  img: string;
}

const getData = (): serviceData[] => {
  return [
    {
      id: 1,
      title: 'ESTATE MATTERS',
      description: '<div>Early Estate Planning is key to protecting and providing for our loved ones in our absence. Let us show how we can help you.</div><div>Simple Will - $200</div><div>Simple Will & LPA - $400</div><div> Probate - From $900</div><div> Letters of Admin - From $900</div>',
      img: '/service/services.svg'
    },
    {
      id: 2,
      title: 'LANDLORD & TENANTS',
      description: '<div>We assist both Landlords and Tenants with problems arising from rental arrears, breach of covenants and eviction.</div><div>Let our team advice you of your rights today.</div>',
      img: '/service/house.svg'
    },
    {
      id: 3,
      title: 'DIVORCE',
      description: '<div>When a marriage breaks down, no one escapes unaffected. Let our experienced lawyers help you through this difficult period.</div><div>Uncontested Divorce - From $1,500</div><div>Contested Divorce - From $2,000</div>',
      img: '/service/ring.svg'
    },
    {
      id: 4,
      title: 'PERSONAL INJURY',
      description: '<div>If you have been unfortunate enough to have been involved in an accident, let our team of lawyers advice you on what compensation you are entitled to. Contact us Today! </div>',
      img: '/service/healt.svg'
    },
    {
      id: 5,
      title: 'CIVIL LITIGATION',
      description: '<div>Civil Litigation is the bread and butter of our company. When a deal goes south or a working relationship breaks down, we will be there to advice you on the best way forward.</div>',
      img: '/service/leter.svg'
    },
    {
      id: 6,
      title: 'CRIMINAL DEFENCE',
      description: '<div>Legal advice should be sought as soon as possible in criminal matters. Don\'t wait till it\'s too late. Let us help you make the right choice</div>',
      img: '/service/defence.svg'
    }
  ];
};

export { getData };
