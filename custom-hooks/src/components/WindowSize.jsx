import useWindowSize from "../custom-hooks/useWindowSize";

export default function WindowSize() {

    const {width, height} = useWindowSize()
  return (
    <div>
      <h1>WindowSize</h1>
      <p>Height:{height}</p>
      <p>Width:{width}</p>
    </div>
  );
}
