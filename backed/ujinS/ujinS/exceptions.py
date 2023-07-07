from rest_framework.views import exception_handler

def custom_exception_handler(exc, context):
    response = exception_handler(exc, context)

    if response is not None:
        if isinstance(response.data, dict):
            errors = {}
            for field, error_list in response.data.items():
                errors[field] = error_list
            response.data = {'errors': errors}

    return response
