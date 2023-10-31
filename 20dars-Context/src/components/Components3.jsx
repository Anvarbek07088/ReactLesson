import { useContext } from "react";
import { MyContext } from "../App";
import { Button, Card } from "react-bootstrap";

const Components3 = () => {

  let { isOpen, setIsOpen, colors, color, setColor } = useContext(MyContext);

  return (
    <div className="container  mb-3">
      <Button
        onClick={() => setIsOpen((isOpen = !isOpen))}
        as="a"
        variant="success"
        className="mb-3"
      >
        {isOpen ? "Opened" : "Open"}
      </Button>
      {isOpen ? (
        <Card style={{ background: color }}>
          <div style={{ width: "100%", padding: "20px", fontSize: "25px" }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde
            quibusdam voluptatem mollitia, libero, ratione vero iure reiciendis
            nisi eligendi cumque tenetur earum dicta architecto cupiditate
            exercitationem repellat laudantium harum omnis optio enim ullam illo
            sapiente magnam. Culpa quas provident quasi magnam corrupti
            doloremque consequuntur, quaerat corporis dignissimos, veritatis
            labore possimus omnis consectetur, minus delectus nihil iusto dolor
            architecto ullam repudiandae ipsa animi. Voluptatum velit numquam
            explicabo suscipit expedita cumque tenetur repellat, doloremque quae
            vel nam hic officia fugiat nobis dignissimos commodi in dolorum ex
            sit id possimus soluta aperiam? Enim, soluta ex dicta sunt alias sit
            quas voluptatum blanditiis cupiditate.
          </div>
          <div
            className="flex mt-2 "
            style={{ background: "white", padding: "20px" }}
          >
            {colors.map((item) => {
              return (
                <Button
                  style={{ background: item, fontSize: "20px" }}
                  key={item}
                  className="ms-2"
                  onClick={() => setColor(item)}
                >
                  {item}
                </Button>
              );
            })}
          </div>
        </Card>
      ) : null}
    </div>
  );
};
export default Components3;
