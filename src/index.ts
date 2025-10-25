/**
 * Main entry point for the yoDEV test application
 */

export class YoDevTester {
  private testName: string;

  constructor(name: string) {
    this.testName = name;
  }

  public greet(): string {
    return `Hello from ${this.testName}!`;
  }

  public runTests(): void {
    console.log('Running yoDEV integration tests...');
    console.log(this.greet());
  }
}

// Run tests
const tester = new YoDevTester('yoDEV GitHub Integration');
tester.runTests();
