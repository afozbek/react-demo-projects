# Some Training with React
- `Makaleler`
   - > [Ilgili Makale](https://www.taniarascia.com/getting-started-with-react/)

   - > [Object Destructring ile Ilgili Onemli bir Makale](https://medium.com/@bretdoucette/understanding-this-setstate-name-value-a5ef7b4ea2b4)

   - > [Lifecyle Methods](https://engineering.musefind.com/react-lifecycle-methods-how-and-when-to-use-them-2111a1b692b1)
- ***Note*: Always start component names with a capital letter.**
- `Understanding SetState`
  - > [İlgili Makale](https://css-tricks.com/understanding-react-setstate/)
- [`Stateful Stateless & Lifecyle React`](https://reactjs.org/docs/state-and-lifecycle.html)
- `When working with setState(), these are the major things you should know:`
  - Update to a component state should be done using setState()
  - You can pass an object or a function to setState()
  - Pass a function when you can to update state multiple times
  - Do not depend on this.state immediately after calling setState() and make use of the updater function instead.
 - Random data oluşturma kütüphanesi **Faker Js**
   - Github reposu için [buraya](https://github.com/marak/Faker.js/) tıklayabilirsiniz.
 ```html
 <!--faker.image.avatar() fonksiyonu ile hızlıca random resim alma-->
 <a href="#" className="avatar">
    <img src={faker.image.avatar()} alt="avatar" />
</a>
 ```
 