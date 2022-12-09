import StepItems from "../../kompleks/StepItems"

const index = () => {
  return (
    <div>
      <section id="feature" className="feature pt-50 pb-50">
        <div className="container-fluid">
          <h2 className="text-4xl fw-bold color-palette-1 text-center mb-30">
            It’s Really That
            <br /> Easy to Win the Game
          </h2>
          <div className="iniflex flex-wrap justify-center items-center" data-aos="fade-up">
            <StepItems icon="items1" title="1. Start" desc1="Pilih salah satu game" desc2="yang ingin kamu topup" />
            <StepItems icon="items2" title="2. Fill-Up" desc1="Top up sesuai dengan" desc2="Nominal yang sudah tersedia" />
            <StepItems icon="items3" title="3. Be a winner" desc1="Siap digunakan untuk" desc2="Improve permainan kamu" />
          </div>
        </div>
      </section>
    </div>
  );
}

export default index
