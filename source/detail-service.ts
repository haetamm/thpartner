// Define the interface for the data structure
export interface detailServiceData {
  id: number;
  title: string;
  description: string;
  price: string | null;
  slug: string;
}

// Function to get data
const getData = (): detailServiceData[] => {
  return [
    {
      id: 1,
      title: 'LASTING POWER OF ATTORNEY',
      description: `<h3 class="font_7 wixui-rich-text__text"><strong><span class="color_21 wixui-rich-text__text"><span class="wixui-rich-text__text">What is an LPA?</span></span></strong></h3>
                      <p class="font_7 wixui-rich-text__text"><span class="color_21 wixui-rich-text__text"><span class="wixui-rich-text__text">A LPA is a legal document that allows a person who is at least 21 years old (&ldquo;the donor&rdquo;), to appoint one or more persons (&ldquo;the donee(s)&rsquo;&rsquo;) to make decisions and act on his behalf in the event that he loses his mental capacity.</span></span></p>
                      <p class="font_8 wixui-rich-text__text"><span class="color_21 wixui-rich-text__text"><span class="wixui-rich-text__text">There are two types of LPA. The first type of LPA grants the donee(s) the authority to deal with the donor&rsquo;s property and financial matters. For instances, the donee(s) may sell the donor&rsquo;s properties or make payments from bank accounts held in the donor&rsquo;s name. The second type of LPA allows the donee(s) to make decisions regarding the donor&rsquo;s health and welfare. For example, the donee(s) can make decisions on the donor&rsquo;s medical treatments, diet or accommodation etc.</span></span></p>
                      <p class="font_8 wixui-rich-text__text">&nbsp;</p>
                      <h3 class="font_7 wixui-rich-text__text"><strong><span class="color_21 wixui-rich-text__text"><span class="wixui-rich-text__text">When does an LPA take effect?</span></span></strong></h3>
                      <p class="font_8 wixui-rich-text__text"><span class="color_21 wixui-rich-text__text"><span class="wixui-rich-text__text">A LPA will take effect when the donor loses his mental capacity. The LPA ceases when the donor regains mental capacity or upon the death of the donor.</span></span></p>
                      <p class="font_8 wixui-rich-text__text"><span class="color_21 wixui-rich-text__text"><span class="wixui-rich-text__text">A person is said to lack mental capacity if he suffers from an injury, disorder or condition that affects the way his mind works and has difficulty making decisions.</span></span></p>
                      <p class="font_8 wixui-rich-text__text">&nbsp;</p>
                      <p class="font_7 wixui-rich-text__text"><strong><span class="color_21 wixui-rich-text__text"><span class="wixui-rich-text__text"><span class="wixGuard wixui-rich-text__text"></span></span></span></strong><strong><span class="color_21 wixui-rich-text__text"><span class="wixui-rich-text__text">Why make an LPA?</span></span></strong></p>
                      <p class="font_8 wixui-rich-text__text"><span class="color_21 wixui-rich-text__text"><span class="wixGuard wixui-rich-text__text"></span></span><span class="color_21 wixui-rich-text__text"><span class="wixui-rich-text__text">A LPA protects the interests by allowing you to personally appoint someone you trust to be responsible, competent and capable to act on your behalf should you lose your mental capacity through an accident, illness or other unforeseeable circumstances.</span></span></p>
                      <p class="font_8 wixui-rich-text__text"><span class="color_21 wixui-rich-text__text"><span class="wixui-rich-text__text">&nbsp;</span></span><span class="color_21 wixui-rich-text__text"><span class="wixui-rich-text__text">In the event that you lose your mental capacity, having a LPA will reduce the stress and obstacles imposed on your family. Without a LPA, your family might be subjected to a lengthy and costly process of appointing a deputy or deputies, pursuant to the Mental Capacity Act.</span></span></p>`,
      price: null,
      slug: 'lasting-power-of-attorney'
    },
    {
      id: 2,
      title: 'LETTERS OF ADMINISTRATION',
      description: `<h3 class="font_8 wixui-rich-text__text"><strong><span class="color_21 wixui-rich-text__text"><span class="wixui-rich-text__text">When will you need Letters of Administration?</span></span></strong></h3>
                      <p class="font_8 wixui-rich-text__text"><span class="color_21 wixui-rich-text__text"><span class="wixui-rich-text__text">When a person passes away intestate (i.e. without leaving behind a will or where the will is declared invalid), a next of kin must apply to court for a grant of letters of administration. The grant of letters of administration provides the appointed administrator with the authority to administer the deceased&rsquo;s estate and distribute the assets pursuant to the intestate laws of Singapore.</span></span></p>
                      <p>&nbsp;</p>
                      <h3><strong><span class="color_21 wixui-rich-text__text"><span class="wixui-rich-text__text">Who is entitled to be appointed as an Administrator?</span></span></strong></h3>
                      <p class="font_7 wixui-rich-text__text"><span class="color_21 wixui-rich-text__text"><span class="wixui-rich-text__text"><span class="wixGuard wixui-rich-text__text"></span></span></span><span class="color_21 wixui-rich-text__text"><span class="wixui-rich-text__text">When an application for a grant of letters of administration is made in court, the court has the power to appoint whoever it thinks ought to be granted the letters of administration. According to the Intestate Succession Act, the following classes of persons, in descending order of priority, are entitled to apply for a grant:</span></span></p>
                      <ol>
                      <li>1. the spouse of the deceased;</li>
                      <li>2. the children of the deceased;</li>
                      <li>3. the parents of the deceased;</li>
                      <li>4. brothers and sisters of the deceased;</li>
                      <li>5. nephews and nieces of the deceased;</li>
                      <li>6. grandparents of the deceased; and</li>
                      <li>7. uncles and aunts of the deceased.</li>
                      </ol>
                      <div><p>&nbsp;</p>
                      <p class="font_8 wixui-rich-text__text"><span class="color_21 wixui-rich-text__text"><span class="wixui-rich-text__text">Persons who have not attained the age of 21 or who have been declared bankrupt cannot be appointed to be administrators. Where a person entitled to a grant is under the age of 21, the grant will be made to his guardian, or if he had attained the age of 16, to any next of kin that he nominates.</span></span></p>
                      <p class="font_8 wixui-rich-text__text"><span class="color_21 wixui-rich-text__text"><span class="wixui-rich-text__text">At least two administrators or a trust corporation must be appointed if any of the beneficiaries is under the age of 21.</span></span></p>
                      <h3 class="font_8 wixui-rich-text__text">&nbsp;</h3>
                      <h3 class="font_8 wixui-rich-text__text"><strong><span class="color_21 wixui-rich-text__text"><span class="wixui-rich-text__text">Who are the beneficiaries?</span></span></strong></h3>
                      <p class="font_8 wixui-rich-text__text"><span class="color_21 wixui-rich-text__text"><span class="wixui-rich-text__text">The rules under Section 7 of the Intestate Succession Act sets out how assets are distributed intestate. Call us to find out more who the beneficiaries will be in your case.</span></span></p></div>`,
      price: '900',
      slug: 'letters-of-administration'
    },
    {
      id: 3,
      title: 'WILLS',
      description: `<h3 class="font_7 wixui-rich-text__text"><strong><span class="color_21 wixui-rich-text__text"><span class="wixui-rich-text__text">What is a Will?</span></span></strong></h3>
                    <p class="font_7 wixui-rich-text__text"><span class="color_21 wixui-rich-text__text"><span class="wixui-rich-text__text"><span class="wixGuard wixui-rich-text__text"></span></span></span><span class="color_21 wixui-rich-text__text"><span class="wixui-rich-text__text">A will is a legal document that sets out what will happen to a person's estate when he or she dies.</span></span></p>
                    <p class="font_7 wixui-rich-text__text">&nbsp;</p>
                    <h3 class="font_7 wixui-rich-text__text"><strong><span class="color_21 wixui-rich-text__text"><span class="wixui-rich-text__text"><span class="wixGuard wixui-rich-text__text"></span></span></span><span class="color_21 wixui-rich-text__text"><span class="wixui-rich-text__text">Why make a Will?</span></span></strong></h3>
                    <p class="font_8 wixui-rich-text__text"><span class="color_21 wixui-rich-text__text"><span class="wixui-rich-text__text">Drafting a Will allows you to decide on how your assets are to be distributed.&nbsp;In the absence of a Will, your assets will be distributed in accordance with the rules of distribution as set out in the Intestate Succession Act (Cap. 146). This may be unsatisfactory if you wish a certain portion of your assets to go to certain family members, close friends or organisations.</span></span></p>
                    <p class="font_8 wixui-rich-text__text"><span class="color_21 wixui-rich-text__text"><span class="wixui-rich-text__text">A Will also allows you to set up special arrangements to take care of vulnerable family members.</span></span></p>
                    <p class="font_8 wixui-rich-text__text"><span class="color_21 wixui-rich-text__text"><span class="wixui-rich-text__text">For example, where young children are involved, a Will can be drafted to provide for the legal guardians to take care of them upon your passing.&nbsp;Protective trust funds can also be set up to ensure that vulnerable family members are well taken care of financially until they are able to take care of themselves.&nbsp;</span></span></p>
                    <p class="font_8 wixui-rich-text__text"><span class="color_21 wixui-rich-text__text"><span class="wixui-rich-text__text">Drafting a will also has the advantage of allowing you to choose someone you trust to manage your assets. Upon your passing, an individual will be appointed to gather your assets and distribute it according to your will (if any) or according to the Intestate Succession Act (Cap. 146).</span></span></p>
                    <p class="font_8 wixui-rich-text__text"><span class="color_21 wixui-rich-text__text"><span class="wixui-rich-text__text">Such an individual has wide ranging power over your assets and although they are bound to manage your assets according to the law or to your wishes in your will, there have been cases where assets have been mishandled and as a result, the intended beneficiaries have suffered loss.</span></span></p>
                    <p class="font_8 wixui-rich-text__text"><span class="color_21 wixui-rich-text__text"><span class="wixui-rich-text__text"><span class="wixGuard wixui-rich-text__text"></span></span></span></p>`,
      price: '200',
      slug: 'wills'
    },
    {
      id: 4,
      title: 'PROBATE',
      description: `<h3 class="font_8 wixui-rich-text__text"><strong><span class="color_21 wixui-rich-text__text"><span class="wixui-rich-text__text">When will you need a Grant of Probate?</span></span></strong></h3>
                    <p class="font_8 wixui-rich-text__text"><span class="color_21 wixui-rich-text__text"><span class="wixui-rich-text__text">When a person dies with a valid Will (&ldquo;testator&rdquo;), the executor(s) specified in the Will, has to apply to the Court for a Grant of Probate within 6 months from the death of the deceased, failing which the applicant will have to give reasons for the delay.</span></span></p>
                    <p class="font_8 wixui-rich-text__text"><span class="color_21 wixui-rich-text__text"><span class="wixui-rich-text__text">A Grant of Probate gives the executor(s) authorisation to administer the estate in accordance with the Will.</span></span></p>
                    <p class="font_8 wixui-rich-text__text"><span class="color_21 wixui-rich-text__text"><span class="wixui-rich-text__text">In the case where the Will does not specify an executor, the Court will grant letters of administration with the Will annexed to the person it deems &lsquo;fittest to administer the estate&rsquo;, according to Section 13 of the Probate and Administration Act.</span></span></p>
                    <p>&nbsp;</p>
                    <h3 class="font_8 wixui-rich-text__text"><strong><span class="color_21 wixui-rich-text__text"><span class="wixui-rich-text__text">Who is entitled to be the Executor?</span></span></strong></h3>
                    <p class="font_8 wixui-rich-text__text"><span class="color_21 wixui-rich-text__text"><span class="wixui-rich-text__text">The person(s) appointed as the executor(s) by the testator in his Will, will be the Executor unless he renounces his rights according to Section 3 of the Probate and Administration Act or is legally incapable of doing so (e.g. Bankrupt or mentally incapacitated).</span></span></p>
                    <p class="font_8 wixui-rich-text__text"><span class="color_21 wixui-rich-text__text"><span class="wixui-rich-text__text">In which event, the Probate and Administration Act details who can be appointed as administrator instead. Call us for advice on this matter today.</span></span></p>
                    <p class="font_8 wixui-rich-text__text">&nbsp;</p>
                    <h3 class="font_8 wixui-rich-text__text"><strong><span class="color_21 wixui-rich-text__text"><span class="wixui-rich-text__text">Who are the Beneficiaries?</span></span></strong></h3>
                    <p class="font_8 wixui-rich-text__text"><span class="color_21 wixui-rich-text__text"><span class="wixui-rich-text__text">Beneficiaries are the individuals or entities which the testator names in his Will to receive his property. Beneficiaries or spouses of beneficiaries must not be witnesses to the Will.</span></span></p>`,
      price: '900',
      slug: 'probate'
    }
  ];
};

export { getData };
