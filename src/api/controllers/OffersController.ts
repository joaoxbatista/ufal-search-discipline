import {getRepository} from "typeorm";
import {NextFunction, Request, Response} from "express";
import {Discipline} from "../models/Discipline";
import {ExtractorPDFService} from "../services/ExtractorPDFService";

export class OffersController {
    async save(request: Request, response: Response, next: NextFunction) {
        const userRepository = getRepository(Discipline);
        try {
            if(!request.file) {
                response.send({
                    status: false,
                    message: 'No file uploaded'
                });
            }
            else {
                const extractor = new ExtractorPDFService();
                const disciplines = await extractor.parsePDFToDisciplines(request.file.path);
                await userRepository.save(disciplines);
                response.json(disciplines);
            }
        }
        catch (e) {
            response.send({
                status: false,
                message: e.message
            });
        }
    }
}