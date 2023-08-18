import './App.css';
const featuresOfCard1 = ["✔ Single User", "✔ 50GB Storage", "✔ Unlimited Public Projects", "✔ Community Access", "✖ Unlimited Private Projects", "✖ Dedicated Phone Support", "✖ Free Subdomain", "✖ Monthly Status Reports"]
const featuresOfCard2 = ["✔ 5 User", "✔ 50GB Storage", "✔ Unlimited Public Projects", "✔ Community Access", "✔ Unlimited Private Projects", "✔ Dedicated Phone Support", "✔ Free Subdomain", "✖ Monthly Status Reports"]
const featuresOfCard3 = ["✔ Unlimited User", "✔ 50GB Storage", "✔ Unlimited Public Projects", "✔ Community Access", "✔ Unlimited Private Projects", "✔ Dedicated Phone Support", "✔ Free Subdomain", "✔ Monthly Status Reports"]
function App() {
  return (
    <div className="App">
      <div class="CardContainer">
        <div class="PriceCards">
          <PriceCards
            cardType="FREE"
            validity="$0/month"
            features={featuresOfCard1}
          />
        </div>
        <div class="PriceCards">
          <PriceCards
            cardType="PLUS"
            validity="$9/month"
            features={featuresOfCard2}
          />
        </div>
        <div class="PriceCards">
          <PriceCards
            cardType="PRO"
            validity="$49/month"
            features={featuresOfCard3}
          />
        </div>
      </div>
    </div>
  );
}

function PriceCards({ cardType, validity, features }) {
  return (
    <>
      <h4>{cardType}</h4>
      <h1>{validity}</h1>
      <div className="line"></div>
      {features && (
        <ul>
          {features.map((feature, index) => (
            <p className={`features ${feature.includes('✖') ? 'red' : feature.includes('✔') ? 'green' : ''}`} key={index}>
              {feature}
            </p>
          ))}
        </ul>
      )}
      <button class="button button5">Button</button>
    </>
  )
}
export default App;
