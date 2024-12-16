const CssComponent = () => {
  return (
    <>
      <div className="flex w-full flex-row gap-3 overflow-hidden">
        <div className="flex flex-col items-center justify-center gap-4 animate-marquee1">
          <div className="h-[180px] w-[280px] rounded-xl bg-yellow-100 shadow-lg" />
          <div className="h-[180px] w-[280px] rounded-xl bg-yellow-100 shadow-lg" />
          <div className="h-[180px] w-[280px] rounded-xl bg-yellow-100 shadow-lg" />
          <div className="h-[180px] w-[280px] rounded-xl bg-yellow-100 shadow-lg" />
          <div className="h-[180px] w-[280px] rounded-xl bg-yellow-100 shadow-lg" />
          <div className="h-[180px] w-[280px] rounded-xl bg-yellow-100 shadow-lg" />
        </div>

        {/* 두 번째 애니메이션 */}
        <div className="flex flex-col gap-4 animate-marquee2">
          <div className="h-[180px] w-[280px] rounded-xl shadow-lg" />
          <div className="h-[180px] w-[280px] rounded-xl shadow-lg" />
          <div className="h-[180px] w-[280px] rounded-xl shadow-lg" />
          <div className="h-[180px] w-[280px] rounded-xl shadow-lg" />
          <div className="h-[180px] w-[280px] rounded-xl shadow-lg" />
          <div className="h-[180px] w-[280px] rounded-xl shadow-lg" />
        </div>

        {/* 세 번째 애니메이션 */}
        <div className="flex flex-col gap-4 animate-marquee3">
          <div className="h-[180px] w-[280px] rounded-xl bg-orange-300 shadow-lg" />
          <div className="h-[180px] w-[280px] rounded-xl bg-orange-300 shadow-lg" />
          <div className="h-[180px] w-[280px] rounded-xl bg-orange-300 shadow-lg" />
          <div className="h-[180px] w-[280px] rounded-xl bg-orange-300 shadow-lg" />
          <div className="h-[180px] w-[280px] rounded-xl bg-orange-300 shadow-lg" />
          <div className="h-[180px] w-[280px] rounded-xl bg-orange-300 shadow-lg" />
        </div>
      </div>
    </>
  );
};

export default CssComponent;
