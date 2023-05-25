import { Card, Col, Row } from "antd";
import React from "react";
import PracticeData from "../../interface/practice";
import { practiceData } from "../../mock/mock-data";
import "./practice.scss";

interface PracticeProps {}

interface PracticeState {
  showCurrentWatch: boolean;
  currentWatch: PracticeData | undefined;
}

class Practice extends React.Component<PracticeProps, PracticeState> {
  constructor(props: PracticeProps) {
    super(props);
    this.state = {
      showCurrentWatch: false,
      currentWatch: undefined,
    };

    this.handleWatch = this.handleWatch.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  changeImgSrc(event: any, src: string): void {
    const target = event.target;
    target.src = src;
  }

  handleWatch(guide: PracticeData): void {
    this.setState({
      showCurrentWatch: true,
      currentWatch: guide,
    });
  }

  handleClose(e: any) {
    this.setState({
      showCurrentWatch: false,
      currentWatch: undefined,
    });
  }

  render(): React.ReactNode {
    return (
      <div data-testid="Practice">
        <div className="headline" id="practices">
          <p>Coding Practices</p>
        </div>
        <Row justify="center">
          <Col>
            <div className="triangle" />
          </Col>
        </Row>
        <Row justify="center">
          <Col span={20}>
            <Row className="guide-content">
              {practiceData.map((guide) => (
                <Col sm={8} key={guide.id}>
                  <Card
                    hoverable
                    className="guide-item"
                    onClick={() => this.handleWatch(guide)}
                    cover={
                      <img
                        alt={guide.hover}
                        src={guide.img}
                        onMouseEnter={(img) =>
                          this.changeImgSrc(img, guide.hover)
                        }
                        onMouseOut={(img) => this.changeImgSrc(img, guide.img)}
                      />
                    }
                  >
                    <Card.Meta title={guide.title} />
                  </Card>
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Practice;
