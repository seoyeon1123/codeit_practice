import Image from 'next/image';
import phoneImage2 from '../assert/phoneImage2.png';

const SecondCoomponent = () => {
  return (
    <>
      <div className="py-32 h-full bg-black *:text-white">
        <div className="flex flex-col items-start justify-between max-w-7xl mx-auto ">
          <div className="max-w-3xl">
            <h1 className="text-3xl">
              Every feature you need to win. Try it for yourself.
            </h1>
            <p className="text-gray-400 leading-7">
              Pocket was built for investors like you who play by their own
              rules and aren’t going to let SEC regulations get in the way of
              their dreams. If other investing tools are afraid to build it,
              Pocket has it.
            </p>
          </div>
          <div>
            <Image
              src={phoneImage2}
              alt="phoneimage2"
              width={400}
              height={200}
            />

            <div>
              <div>
                <h2>Invite friends for better returns</h2>
                <p>
                  For every friend you invite to Pocket, you get insider
                  notifications 5 seconds sooner. And it’s 10 seconds if you
                  invite an insider.
                </p>
              </div>
              <div>
                <h2>Notifications on stock dips</h2>
                <p>
                  Get a push notification every time we find out something
                  that’s going to lower the share price on your holdings so you
                  can sell before the information hits the public markets.
                </p>
              </div>
              <div>
                <h2> Invest what you want</h2>

                <p>
                  We hide your stock purchases behind thousands of anonymous
                  trading accounts, so suspicious activity can never be traced
                  back to you.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      ;
    </>
  );
};

export default SecondCoomponent;
