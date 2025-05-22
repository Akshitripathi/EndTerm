const enrollmentModel = require('../model/cenrollModel.js');

exports.createEnrollment=async(req,res)=>{
    try {
        const { studentName, email, course } = req.body;
        if (!studentName || !email || !course) {
            return res.status(400).json({ message: 'All fields are required' });
        }
        const existingEnrollment = await enrollmentModel.findOne({email, course});
        if (existingEnrollment) {
            return res.status(400).json({ message: 'User already enrolled in this course' });
        }
        const newEnrollment = new enrollmentModel({
            studentName,
            email,
            course
        });
        await newEnrollment.save();
        res.status(201).json({ message: 'Enrollment created successfully', data: newEnrollment });
    } catch (error) {
        res.status(500).json({ message: 'Error creating enrollment', error: error.message });
    }
}

exports.getEnrollment=async(req,res)=>{
    try {
        const enrollments = await enrollmentModel.find();
        res.status(200).json({ message: 'Enrollments retrieved successfully', data: enrollments });
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving enrollments', error: error.message });
    }
}

exports.updateEnrollment = async (req, res) => {
    try {
        const { id } = req.params;
        const { studentName, email, course } = req.body;

        if (!studentName || !email || !course) {
            return res.status(400).json({ message: 'All fields are required' });
        }

        const updatedEnrollment = await enrollmentModel.findByIdAndUpdate(
            id,
            { studentName, email, course },
            { new: true } 
        );

        if (!updatedEnrollment) {
            return res.status(404).json({ message: 'Enrollment not found' });
        }

        res.status(200).json({ message: 'Enrollment updated successfully', data: updatedEnrollment });
    } catch (error) {
        res.status(500).json({ message: 'Error updating enrollment', error: error.message });
    }
};

exports.deleteEnrollment = async (req, res) => {
    try {
        const { id } = req.params;

        const deletedEnrollment = await enrollmentModel.findByIdAndDelete(id);

        if (!deletedEnrollment) {
            return res.status(404).json({ message: 'Enrollment not found' });
        }

        res.status(200).json({ message: 'Enrollment deleted successfully', data: deletedEnrollment });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting enrollment', error: error.message });
    }
};
