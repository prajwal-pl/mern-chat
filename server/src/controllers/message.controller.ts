import { Request, RequestHandler } from "express";
import Conversation from "../models/conversation.model";
import Message from "../models/message.model";

export const getMessages: RequestHandler = async (req, res) => {
  try {
    const { id: toChatId } = req.params;
    const senderId = req.user?._id;

    const conversation = await Conversation.findOne({
      participants: { $all: [senderId, toChatId] },
    }).populate("messages");
    if (!conversation) return res.status(200).json([]);
    const messages = conversation.messages;
    return res.status(200).json(messages);
  } catch (error) {
    console.log(error);
  }
};

export const sendMessages: RequestHandler = async (req: Request, res) => {
  try {
    const { message } = req.body;
    const { id: recieverId } = req.params;
    const senderId = req.user?._id;

    let conversation = await Conversation.findOne({
      participants: { $all: [senderId, recieverId] },
    });

    if (!conversation) {
      conversation = await Conversation.create({
        participants: [senderId, recieverId],
      });
    }

    const newMessage = new Message({
      senderId,
      recieverId,
      message,
    });
    if (newMessage) {
      conversation.messages.push(newMessage._id);
    }
    await Promise.all([conversation.save(), newMessage.save()]);

    res.status(201).json(newMessage);
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ error: "A problem occurred while sending the message!" });
  }
};
