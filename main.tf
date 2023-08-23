provider "aws" {
  region = "eu-west-2"
}

resource "aws_instance" "Framework-Api" {
  ami = "ami-09a2a0f7d2db8baca"
  instance_type = "t2.micro"
  tags = {
    Name = "Framework-Api-Instance"
  }
}