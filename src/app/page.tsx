import IconAddMoney from "@/components/icons/IconAddMoney";
import IconBetting from "@/components/icons/IconBetting";
import IconCasino from "@/components/icons/IconCasino";
import IconChartGrowth from "@/components/icons/IconChartGrowth";
import IconCodeSlash from "@/components/icons/IconCodeSlash";
import IconCryptoExchange from "@/components/icons/IconCryptoExchange";
import IconCurrencyTaka from "@/components/icons/IconCurrencyTaka";
import IconDating from "@/components/icons/IconDating";
import IconESport from "@/components/icons/IconESport";
import IconGaming from "@/components/icons/IconGaming";
import IconOthers from "@/components/icons/IconOthers";
import IconShieldCheck from "@/components/icons/IconShieldCheck";
import IconWithdrawMoney from "@/components/icons/IconWithdrawMoney";
import SectionTitle from "@/components/layouts/SectionTitle";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <section className='flex flex-col justify-center h-auto md:h-[500px] bg-gradient-to-bl from-green-200 from-0% via-green-50 via-50% to-lime-100 to-100%'>
        <div className='container'>
          <div className='flex md:flex-row flex-col'>
            <div className='flex-1 md:pr-32 flex flex-col justify-center text-center md:text-left'>
              <div className='mb-4'>
                <h3 className='text-xs md:text-lg mt-8 md:mt-0'>
                  Accept Payments. Make Payouts. Automate Payroll
                </h3>
              </div>
              <div>
                <h1 className='mb-4 text-[40px md:text-[48px]'>
                  The Smart Way for Online Payment Solution
                </h1>
                <p>
                  TakaPay24 is the only payments solution in Bangladesh that
                  allows businesses to accept, process and disburse payments
                  with its product suite.
                </p>
              </div>
            </div>
            <div className='flex-1 flex items-center justify-center mt-4 md:mt-0 pb-10 md:pb-0'>
              <Image
                width={400}
                height={200}
                src='/images/hero-image.png'
                alt='payments'
              />
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className='flex items-center justify-between'>
          <div className='bg-green-200 h-32 flex-1 flex md:flex-row flex-col items-center justify-center p-4 md:p-0'>
            <IconAddMoney className='w-8 h-8 md:mr-3 mb-2 md:mb-0' />{" "}
            <h2 className='text-black text-center md:text-2xl'>Deposit API</h2>
          </div>
          <div className='bg-slate-900 h-32 flex-1 flex md:flex-row flex-col items-center justify-center p-4 md:p-0'>
            <IconWithdrawMoney className='w-8 h-8 mb-2 md:mb-0 md:mr-3 ' />{" "}
            <h2 className='text-white text-center md:text-2xl'>Withdraw API</h2>
          </div>
          <div className='bg-lime-200 h-32 flex-1 flex md:flex-row flex-col items-center justify-center p-4 md:p-0'>
            <IconCryptoExchange className='w-8 h-8 mb-2 md:mb-0 md:mr-3 ' />{" "}
            <h2 className='text-black text-center md:text-2xl'>
              Crypto Exchange
            </h2>
          </div>
        </div>
      </section>

      <section id='services' className='py-20'>
        <div className='container'>
          <SectionTitle
            desc='We offer multiple payment solutions for individual or businesses. Checkout the smart solutions which may fulfill your needs.'
            title='What We Offer'
          />
          <div className='flex md:flex-row flex-col items-center justify-between mt-20'>
            <div className='w-full md:w-96 mb-8 md:mb-0 h-60 text-center bg-green-100 p-6 rounded-lg shadow flex flex-col items-center justify-center'>
              <IconAddMoney className='w-14 h-14 shrink-0' />
              <h2 className='my-1'>Deposit API</h2>
              <p>
                Automate your customer deposits from any Bangladeshi Mobile
                Banking platforms such as Bkash, Nagad, Rocket, Upay etc etc.
              </p>
            </div>
            <div className='md:w-96 mb-8 md:mb-0 h-60 text-center bg-lime-100 p-6 rounded-lg shadow flex flex-col items-center justify-center'>
              <IconWithdrawMoney className='w-14 h-14 shrink-0' />
              <h2 className='my-1'>Withdraw API</h2>
              <p>
                Automate your customer withdrawals from any Bangladeshi Mobile
                Banking platforms such as Bkash, Nagad, Rocket, Upay etc etc.
              </p>
            </div>
            <div className='md:w-96 mb-8 md:mb-0 h-60 text-center bg-cyan-100 p-6 rounded-lg shadow flex flex-col items-center justify-center'>
              <IconCryptoExchange className='w-14 h-14 shrink-0' />
              <h2 className='my-1'>Crypto Exchange</h2>
              <p>
                The people-powered way to move money. The largest P2P
                marketplace to buy, sell, send, and receive crypto and local
                currencies.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className='py-20 bg-slate-900'>
        <div className='container'>
          <div className='flex md:flex-row flex-col items-center md:justify-between justify-center'>
            <div className='flex-1 md:pr-20 text-center md:text-left mb-10 md:mb-0'>
              <h1 className='text-white'>We Provide Multiple Wallet APIs</h1>
              <p className='mt-4 text-white'>
                You are in the right place. We support multiple wallet
                standards. Integrating a digital wallet application with
                multiple platforms allows users to manage their finances
                seamlessly from a single platform.
              </p>
            </div>
            <div className='flex-1'>
              <Image
                className='w-full'
                width={500}
                height={300}
                alt='logos'
                src='/images/all-logos.png'
              />
            </div>
          </div>
        </div>
      </section>
      <section id='about' className='py-20'>
        <div className='container'>
          <SectionTitle
            desc="Here is why Bangladesh's
leading businesses prefer
TakaPay24 Payment Gateway"
            title='Why Choos Us'
          />
        </div>
        <div className='container mt-16'>
          <div className='flex'>
            <div className='bg-green-100 h-full md:h-32 w-full md:w-7/12 overflow-hidden rounded-lg shadow flex md:flex-row flex-col items-center'>
              <div className='shrink-0 h-28 md:h-full bg-green-500 text-white w-full md:w-36  flex items-center justify-center'>
                <IconCodeSlash className='w-20 h-20' />
              </div>
              <div className='p-4 text-center md:text-left'>
                <h2>Effortless Integration</h2>
                <p>
                  Our developer-friendly APIs for all major languages make
                  integration easy, allowing you to focus on growing your
                  business.
                </p>
              </div>
            </div>
          </div>
          <div className='flex justify-end mt-12'>
            <div className='bg-lime-100 h-full md:h-32 w-full md:w-7/12 overflow-hidden rounded-lg shadow flex md:flex-row flex-col items-center'>
              <div className='shrink-0 h-28 md:h-full bg-lime-500 text-white w-full md:w-36 flex items-center justify-center'>
                <IconChartGrowth className='w-20 h-20' />
              </div>
              <div className='p-4 text-center md:text-left'>
                <h2>Industry-Best Success Rates</h2>
                <p>
                  The system proactively identifies potential downtimes for
                  payment methods and prevents transactions with lower chances
                  of success.
                </p>
              </div>
            </div>
          </div>
          <div className='flex mt-12'>
            <div className='bg-blue-100 h-full md:h-32 w-full md:w-7/12 overflow-hidden rounded-lg shadow flex md:flex-row flex-col items-center'>
              <div className='shrink-0 h-28 md:h-full bg-blue-500 text-white w-full md:w-36  flex items-center justify-center'>
                <IconShieldCheck className='w-20 h-20' />
              </div>
              <div className='p-4 text-center md:text-left'>
                <h2>Secure & Compliant</h2>
                <p>
                  Fast & Secure Payment with data encryption, internal audits,
                  and FRA capabilities, ensuring 100% secure transactions.
                </p>
              </div>
            </div>
          </div>
          <div className='flex justify-end mt-12'>
            <div className='bg-teal-100 h-full w-full md:h-32 md:w-7/12 overflow-hidden rounded-lg shadow flex md:flex-row flex-col items-center'>
              <div className='shrink-0 h-28 md:h-full bg-teal-500 text-white md:w-36 w-full  flex items-center justify-center'>
                <IconCurrencyTaka className='w-32 h-32' />
              </div>
              <div className='p-4 text-center md:text-left'>
                <h2>Multiple Payment Methods</h2>
                <p>
                  Offer your customers a wide range of payment methods,
                  including Bkash, Nagad, Rocket & other Mobile Banking
                  Platforms.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='py-20 bg-green-100'>
        <div className='container'>
          <SectionTitle
            desc='Online Payment Solutions
for Any Industry, Service and Website'
            title='We Accept All Type Of Industries'
          />

          <div className='mt-16 flex md:flex-row flex-col items-center justify-between'>
            <div className='md:w-40 h-36 w-full bg-slate-800 text-white rounded-lg p-4 flex flex-col items-center justify-center mb-6 md:mb-0'>
              <div>
                <IconCasino className='w-14 h-14 text-white fill-white' />
              </div>
              <h3 className='mt-2'>Casino</h3>
            </div>
            <div className='md:w-40 h-36 w-full bg-slate-800 text-white rounded-lg p-4 flex flex-col items-center justify-center mb-6 md:mb-0'>
              <div>
                <IconBetting className='w-14 h-14 text-white fill-white' />
              </div>
              <h3 className='mt-2'>Betting</h3>
            </div>
            <div className='md:w-40 h-36 w-full bg-slate-800 text-white rounded-lg p-4 flex flex-col items-center justify-center mb-6 md:mb-0'>
              <div>
                <IconGaming className='w-16 h-16 text-white fill-white' />
              </div>
              <h3 className='mt-1.5'>iGaming</h3>
            </div>
            <div className='md:w-40 h-36 w-full bg-slate-800 text-white rounded-lg p-4 flex flex-col items-center justify-center mb-6 md:mb-0'>
              <div>
                <IconESport className='w-14 h-14 text-white fill-white' />
              </div>
              <h3 className='mt-2'>eSport</h3>
            </div>
            <div className='md:w-40 h-36 w-full bg-slate-800 text-white rounded-lg p-4 flex flex-col items-center justify-center mb-6 md:mb-0'>
              <div>
                <IconDating className='w-14 h-14 text-white fill-white' />
              </div>
              <h3 className='mt-2'>Dating</h3>
            </div>
            <div className='md:w-40 h-36 w-full bg-slate-800 text-white rounded-lg p-4 flex flex-col items-center justify-center mb-6 md:mb-0'>
              <div>
                <IconOthers className='w-12 h-12 text-white fill-white' />
              </div>
              <h3 className='mt-2'>Others</h3>
            </div>
          </div>
        </div>
      </section>
      <section id='contact' className='bg-white py-20'>
        <div className='container'>
          <SectionTitle
            desc="Have questions or need a demo? Let's start a business meeting
              virtually to discuss about your needs."
            title="Let's Talk"
          />

          <div className='flex md:flex-row flex-col md:items-center'>
            <div className='flex-1'>
              <Image
                height={300}
                width={450}
                alt='contact'
                src='/images/contact.png'
              />
            </div>
            <div className='flex-1 mt-8 md:mt-0'>
              <div className='mb-4 w-full'>
                {" "}
                <input
                  placeholder='Your Email'
                  className='w-full'
                  type='text'
                />
              </div>
              <div className='mb-4 w-full'>
                {" "}
                <input className='w-full' placeholder='Subject' type='text' />
              </div>
              <div className='w-full'>
                <textarea
                  rows={5}
                  className='w-full mb-4'
                  placeholder='Message'
                ></textarea>
              </div>
              <div className='w-full'>
                <button className='btn btn-primary w-full'>Send Message</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
